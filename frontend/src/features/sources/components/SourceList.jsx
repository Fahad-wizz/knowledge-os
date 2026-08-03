import SourceCard from "./SourceCard";

export default function SourceList({

    sources,

    selected,

    onSelect

}) {

    return (

        <div className="space-y-3">

            {

                sources.map(source => (

                    <SourceCard

                        key={source.id}

                        source={source}

                        selected={selected?.id === source.id}

                        onClick={() => onSelect(source)}

                    />

                ))

            }

        </div>

    );

}