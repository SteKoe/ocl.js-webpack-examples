import Examples from "../examples";

export function OclExamples() {
    return (
        <div className="examples-grid">
            {Object.entries(Examples).map(([name, Example]) => (
                <div key={name} className="example">
                    <Example/>
                </div>
            ))}
        </div>
    )
}