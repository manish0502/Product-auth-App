const Product = require("../models/Product.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const asyncWrapper = require("../middleware/async");

const getAllProducts = asyncWrapper(async (req, res) => {

  const products = await Product.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({

     msg:"Here Are the List",
     status: StatusCodes.OK,
     productList:products,
     count: products.length

     });
});

const getProduct = asyncWrapper(async (req, res) => {

  const { id: productId } = req.params;
  const { userId } = req.user;

  const product = await Product.findOne({
    _id: productId,
    createdBy: userId,
  });
  if (!product) {
    throw new NotFoundError(`No Product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({
    msg: `Product with id : ${productId} found successfully`,
    status: StatusCodes.OK,
    productDetails: product,
  });
});

const createJob = asyncWrapper(async (req, res) => {

  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({
      
    msg: "Product has been created successfully",
    status: StatusCodes.CREATED,
    productDetails: product,
  });
});

const updateProduct = asyncWrapper(async (req, res) => {

  const { name , description } = req.body; 
  const { userId } = req.user; 
  const { id: productId } = req.params


  if (name === "" || description === "") {
    throw new BadRequestError("Name or Description fields cannot be empty");
  }
  const product = await Product.findByIdAndUpdate(

    { _id: productId, createdBy: userId },
      req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    throw new NotFoundError(`No Product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({
    msg: `Product with id : ${productId} has been Updated successfully`,
    status: StatusCodes.OK,
    productDetails: product,
  });

});

const deleteProduct = asyncWrapper(async (req, res) => {

  
  const { userId } = req.user; 
  const { id: productId } = req.params
  const product = await Product.findByIdAndRemove({
    _id: productId,
    createdBy: userId,
  });
  if (!product) {
    throw new NotFoundError(`No Product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({

     msg: `Product with id : ${productId} has been Deleted successfully`,
    status: StatusCodes.OK,

  });
 
});

module.exports = {
  createJob,
  deleteProduct,
  getAllProducts,
  updateProduct,
  getProduct,
};
