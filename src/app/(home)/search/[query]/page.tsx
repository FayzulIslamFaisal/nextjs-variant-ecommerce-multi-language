
const page = async ({ params }: { params: { query: string } }) => {
    const { query } = await params;
    console.log("search query", query);
    return (
        <div>
            <h1>Search Results for: {query}</h1>
        </div>
    )
}

export default page

