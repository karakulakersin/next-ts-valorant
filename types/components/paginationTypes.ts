export type TPaginationProps= {
    data: number,
    currentPage: number,
    pageSize: number,
    onPageChange: (page:number) => void
}
export type TStyledComponentProps = {
    $active : boolean;
}