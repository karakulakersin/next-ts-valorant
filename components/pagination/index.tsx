import { PaginationContainer, PageLink, PageItem } from "@/components/pagination/styles";
import { TPaginationProps } from "@/types/components/paginationTypes";

export default function Pagination({ data, currentPage, pageSize, onPageChange }: TPaginationProps) {
        const pagesCount = Math.ceil(data / pageSize);
        if (pagesCount === 1)
            return null;
        const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div>
            <PaginationContainer>
                {pages.map((page) => (
                    <PageItem onClick={() => onPageChange(page)}
                        key={page} $active={page === currentPage}>
                        <PageLink >
                            {page}
                        </PageLink>
                    </PageItem>
                ))}
            </PaginationContainer>
        </div>
    );
};