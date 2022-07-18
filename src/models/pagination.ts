export type IPage<T> = {
    data: T[];
    pagination: Pagination;
}

export type Pagination = {
    currentPage: number;
    nextPage: number;
    totalPages: number;
}