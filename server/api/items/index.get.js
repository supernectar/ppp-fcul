import Item from '~~/server/models/Item';

export default defineEventHandler(async (event) => {
  const params = useQuery(event);

  try {
    const items = await Item.find(params)
      .populate('polutions')
      .populate('resources');

    return items;
  } catch (err) {
    console.log(err);
    return { error: 'Could not retrieve items' };
  }
});
