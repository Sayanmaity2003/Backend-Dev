//async-await wala
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = ()=>{}
// const asyncHandler = (fun)=>{()=>{}}
// const asyncHandler = (fun)=>{async()=>{}}

/*Try-Catch wala
const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      res.status(e.code || 500).json({
        success: false,
        message: e.message,
      });
    }
  };
};
*/