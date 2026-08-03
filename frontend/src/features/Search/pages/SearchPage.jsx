import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import useSemanticSearch from "../hooks/useSemanticSearch";

import SearchHeader from "../components/SearchHeader";
import SearchInput from "../components/SearchInput";
import SearchContent from "../components/SearchContent";
import KnowledgePreview from "../components/KnowledgePreview";

export default function SearchPage() {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const {
        data,
        isLoading,
        error
    } = useSemanticSearch(query);

    const [selectedResult, setSelectedResult] = useState(null);

    useEffect(() => {

        if (data?.results?.length > 0) {

            setSelectedResult(data.results[0]);

        }

    }, [data]);

    return (

        <DashboardLayout>

            <div className="space-y-6">

                <SearchHeader
                    query={query}
                    totalResults={data?.totalResults || 0}
                />

                <SearchInput
                    initialQuery={query}
                />

                <SearchContent
                    results={data?.results || []}
                    selectedResult={selectedResult}
                    onSelect={setSelectedResult}
                    isLoading={isLoading}
                    error={error}
                    query={query}
                />

                <KnowledgePreview
                    result={selectedResult}
                    query={query}
                />

            </div>

        </DashboardLayout>

    );

}