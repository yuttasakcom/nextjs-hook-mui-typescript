

interface Props {
    components: Array<[React.ComponentType<any>, Record<string, any>] | React.ComponentType<any>>
    children: React.ReactNode
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Compose
            components={[

            ]}
            children={children}
        ></Compose>
    )
}

function Compose({ components, children }: Props) {
    return components.reduceRight((prev, curr): React.ReactNode => {
        if (Array.isArray(curr)) {
            const [Component, props] = curr
            return <Component {...props}>{prev}</Component>
        }

        const Component = curr
        return <Component>{prev}</Component>
    }, children)
}