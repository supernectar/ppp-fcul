import Storage from '~/server/models/Storage';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;
  // const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(' ')[1];

  // try {

  // const decoded = await jwt.verify(token, 'secretkey');

  const { storageId } = event.context.params;

  // const transport = await Transport.findById(id);

  // if (!transport) {
  //   res.status = 404;
  //   res.send('transport not found');
  // } else if (transport.owner !== decoded.user._id) {
  //   res.json({
  //     error: 'You must be the owner to change this transport'
  //   });
  // } else {
  try {
    await Storage.deleteOne({ _id: storageId });
    return 'Good';
  } catch (err) {
    console.log(err);
    return 'Bad';
  }

  // return event.res.jsonResponse;
});
