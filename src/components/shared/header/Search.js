import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
const Search = ({setQuery, query, onHandleSearch}) => {
    // const categories =["men", "women", "kid", "accessories"];
    return (
        <div className=" flex items-stretch h-10 ">
            {/* <Select name="category" className="py-2 h-full ">
                <SelectTrigger className="w-[120px] h-full bg-white text-black rounded-none outline-0">
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent position="popper" className="h-full">
                    <SelectItem value="all" className="h-[40px]">All</SelectItem>
                    {categories.map((category, index) => (
                        <SelectItem key={index} value={category}>{category}</SelectItem>
                    ))}
                    
                </SelectContent>
            </Select> */}
            <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black border-r border-none py-2 h-[40px] " placeholder="Search..." name="q" type="search" />
            <Button onClick={onHandleSearch} type="submit" className="bg-primary text-primary-foreground rounded-s-none rounded-e-2xl h-full text-base px-3 py-1"><SearchIcon className="w-4 h-4"/></Button>
        </div>
    )
}

export default Search
    