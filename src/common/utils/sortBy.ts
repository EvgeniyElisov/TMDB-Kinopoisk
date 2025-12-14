export const sortBy = <T extends Record<string, any>>(
  array: T[],
  field: keyof T,
  limit: number
): T[] => {
  return [...array]
    .sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return bValue - aValue;
      }
      
      return 0;
    })
    .slice(0, limit);
};
