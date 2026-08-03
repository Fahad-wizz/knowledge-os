import { useSearchParams } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import SearchHeader from "../components/SearchHeader";
import SearchInput from "../components/SearchInput";
import SearchLoading from "../components/SearchLoading";
import EmptyResults from "../components/EmptyResults";
import SearchResults from "../components/SearchResults";
import KnowledgePreview from "../components/KnowledgePreview";

import useSemanticSearch from "../hooks/useSemanticSearch";

import { useState, useEffect } from "react";

export default function SearchPage() {

    const [searchParams, setSearchParams] =

        useSearchParams();

    const initialQuery =

        searchParams.get("q") ?? "";

    const [query, setQuery] =

        useState(initialQuery);

    const [selectedResult,

        setSelectedResult] =

        useState(null);

    const {

        data,

        isLoading,

        error

    } = useSemanticSearch(query);

    useEffect(() => {

        const value = query.trim();

        if (value) {

            setSearchParams({

                q: value

            });

        } else {

            setSearchParams({});

        }

    }, [query]);

    useEffect(() => {

        if (

            data?.results?.length > 0

        ) {

            setSelectedResult(

                data.results[0]

            );

        }

    }, [data]);

    return (

        <DashboardLayout>

            <div className="space-y-8">

                <SearchHeader />

                <SearchInput

                    query={query}

                    setQuery={setQuery}

                />

                {

                    isLoading &&

                    <SearchLoading />

                }

                {

                    error &&

                    <p className="text-red-500">

                        Search failed.

                    </p>

                }

                {

                    !isLoading &&

                    data &&

                    (

                        <div

                            className="grid grid-cols-[400px_1fr] gap-6"

                        >

                            <SearchResults

                                results={data.results}

                                selected={selectedResult}

                                onSelect={setSelectedResult}

                            />

                            <KnowledgePreview

                                result={selectedResult}

                            />

                        </div>

                    )

                }

                {

                    !isLoading &&

                    data?.results?.length === 0 &&

                    (

                        <EmptyResults />

                    )

                }

            </div>

        </DashboardLayout>

    );

}