export default function timeoutPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({errcode:-1,message:'请求超时'});
    }, timeout);
  });
}