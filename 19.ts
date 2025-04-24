interface ApiInterface<T> {
  success: boolean;
  data: T;
}

let response = function <T>(data: T): T {
  return data;
};

let api: ApiInterface<object> = response({
  success: false,
  data: {
    userName: "someon",
    name: "someone",
  },
});
console.log(api);
