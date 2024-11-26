import React from 'react'
import { Card, Skeleton } from "@nextui-org/react";

const Sekeleton = () => {
    return (
        <>
            <Skeleton className="w-3/5 m-auto rounded-lg mt-8 mb-4">
                <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} className="w-full space-y-5 p-4" radius="lg">
                        <Skeleton className="rounded-lg">
                            <div className="h-96 rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <div className="space-y-3">
                            <Skeleton className="w-3/5 rounded-lg">
                                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-4/5 rounded-lg">
                                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-2/5 rounded-lg">
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Skeleton