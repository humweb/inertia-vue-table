function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

export function transform(items: (number | 'ellipsis')[]): { type: string; value: number }[] {
  return items.map((value) => {
    if (typeof value === 'number') {
      return { type: 'page', value };
    }
    return { type: 'ellipsis', value: 0 };
  });
}

export function getRange(
  currentPage: number,
  pageCount: number,
  siblingCount: number,
  showEdges: boolean,
): (number | 'ellipsis')[] {
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount);

  const showLeftEllipsis = leftSiblingIndex > 3;
  const showRightEllipsis = rightSiblingIndex < pageCount - 2;

  if (showEdges) {
    const itemCount = Math.min(2 * siblingCount + 5, pageCount) - 2;

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftRange = range(1, itemCount);
      return [...leftRange, 'ellipsis', pageCount];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightRange = range(pageCount - itemCount + 1, pageCount);
      return [1, 'ellipsis', ...rightRange];
    }

    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, 'ellipsis', ...middleRange, 'ellipsis', pageCount];
    }

    return range(1, pageCount);
  } else {
    const itemCount = siblingCount * 2 + 1;

    if (pageCount < itemCount) {
      return range(1, pageCount);
    } else if (currentPage <= siblingCount + 1) {
      return range(1, itemCount);
    } else if (pageCount - currentPage <= siblingCount) {
      return range(pageCount - itemCount + 1, pageCount);
    } else {
      return range(leftSiblingIndex, rightSiblingIndex);
    }
  }
}
