import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const Search = ({ query, setQuery, onHandleSearch }) => {
    return (
        <div className=" flex items-stretch h-10 ">
            
            <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black border-r border-none py-2 h-[40px] "
                placeholder="Search..."
                name="q"
                type="search"
            />
            <Button onClick={onHandleSearch} type="submit" className="bg-primary text-primary-foreground rounded-s-none rounded-e-2xl h-full text-base px-3 py-1"><SearchIcon className="w-4 h-4" /></Button>
        </div>
    )
}

export default Search
