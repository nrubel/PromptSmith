
const samples: string[] = []

export default function PromptSamples() {
    return <>{samples.map((sample: string, i: number) => (
        <div key={`prompt-sample-${i}`}>
            <div>{sample}</div>
            
        </div>
    ))}</>;
}
