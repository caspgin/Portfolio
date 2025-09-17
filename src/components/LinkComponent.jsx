// eslint-disable-next-line react/prop-types
export const Link = ({ href, linkSymbol, linkTitle, svg }) => {
    const m = { fontSize: '1.5rem', fontWeight: 200 };
    return (
        <a
            href={href}
            className={`flex text-gray-50 whitespace-nowrap items-center justify-center max-h-[40px] border-1 border-white rounded-full p-2 font-semibold ${linkTitle ? 'px-4' : ''}`}
        >
            <div className="w-6 aspect-square grid place-content-center">
                {linkSymbol && (
                    <span className="material-symbols-outlined" style={m}>
                        {linkSymbol}
                    </span>
                )}
                {svg}
            </div>
            {linkTitle && <span className="ml-2 text-sm">{linkTitle}</span>}
        </a>
    );
};
