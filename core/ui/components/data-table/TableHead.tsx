import {FC, ReactNode} from "react";

import {cn} from "@/core/ui/utils/utils";

interface TableHeadProps {
    children?: ReactNode;
    className?: string;
}

const TableHead: FC<TableHeadProps> = ({
    children,
    className,
}: TableHeadProps) => {
    return (
        <>
            <thead
                className={cn(
                    `bg-surface-container text-body-medium ${className || ""}`
                )}>
                {children}
            </thead>
        </>
    );
};

export {TableHead};
