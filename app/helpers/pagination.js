export function paginationParams(args) {
  if (args.count) {
    const { count, page } = args;
    return { limit: count, offset: count * page };
  } else {
    return {};
  }
}

export function trimPagination(args) {
  const new_args = Object.assign({}, args);

  delete new_args.count;
  delete new_args.page;
  return new_args;
}