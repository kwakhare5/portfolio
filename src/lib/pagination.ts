export interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  pagination: PaginationState;
}

export interface PaginationOptions {
  page?: number;
  pageSize?: number;
}

export function normalizePage(pageRaw?: string | number | null): number {
  if (typeof pageRaw === "number") {
    return Number.isInteger(pageRaw) && pageRaw > 0 ? pageRaw : 1;
  }

  if (typeof pageRaw === "string") {
    const parsed = parseInt(pageRaw, 10);
    return !isNaN(parsed) && parsed > 0 ? parsed : 1;
  }

  return 1;
}

export function paginate<T>(
  items: T[],
  options: PaginationOptions = {}
): PaginatedResult<T> {
  const safeItems = Array.isArray(items) ? items : [];
  const page = normalizePage(options.page);
  const pageSize = options.pageSize && options.pageSize > 0 ? options.pageSize : 5;
  const totalItems = safeItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(page, totalPages);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = safeItems.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    pagination: {
      page: currentPage,
      pageSize,
      totalItems,
      totalPages,
      hasPreviousPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    },
  };
}
