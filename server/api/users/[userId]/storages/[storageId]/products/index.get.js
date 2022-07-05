import Product from '~~/server/models/Product';
import Storage from '~~/server/models/Storage';

export default defineEventHandler(async (event) => {
  const { userId, storageId } = event.context.params;

  try {
    const productIds = (await Storage.findById(storageId)).products;
    const products = await Product.find({
      _id: { $in: productIds }
    })
      .populate('item')
      .populate('storages');

    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
    return { error: 'Could not find products' };
  }
});
