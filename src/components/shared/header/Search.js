import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const Search = () => {
    const categories =["men", "women", "kid", "accessories"];
    return (
        <form action="/search" method="GET" className=" flex items-stretch h-10 ">
            <Select name="category">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category, index) => (
                        <SelectItem key={index} value={category}>{category}</SelectItem>
                    ))}
                    
                </SelectContent>
            </Select>
            <Input className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black border-r border-none py-2 " placeholder="Search..." name="q" type="search" />
            <Button type="submit" className="bg-primary text-primary-foreground rounded-s-none rounded-e-2xl h-full text-base px-3 py-1"><SearchIcon className="w-4 h-4"/></Button>
        </form>
    )
}

export default Search
    