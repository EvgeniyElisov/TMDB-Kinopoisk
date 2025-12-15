import type { RefObject } from "react";
import styles from "./LoadingTrigger.module.css";

type Props = {
  observerRef: RefObject<HTMLDivElement | null>;
  isFetchingNextPage: boolean;
};

export const LoadingTrigger = ({ observerRef, isFetchingNextPage }: Props) => {
  return <div ref={observerRef}>{isFetchingNextPage ? <div className={styles.message}>Loading more movies...</div> : <div style={{ height: "20px" }} />}</div>;
};
