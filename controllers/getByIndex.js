import {promiseFibonacciByIndex} from '../model/fibonacci'

export default (req, res) => {
    const index = req.params.index;
    promiseFibonacciByIndex(index)
        .then((r) => res.status(200).json(r))
        .catch((r) => res.status(500).json(err));
    
  };