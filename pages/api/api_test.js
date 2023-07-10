export default async function handler(req, res) {
  const response = await fetch(process.env.BackEndAPI);
  const result = await response.json();
  res.status(200).json({host : process.env.BaclEndAPI,results : result})

  //console.log(response)
  //res.status(200).json({status : 333})
}
