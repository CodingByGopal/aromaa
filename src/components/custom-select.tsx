"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CustomSelectType } from "@/data/_model/custom.select.type"
import { useRouter, usePathname, useSearchParams } from "next/navigation"


export function CustomSelect(props: CustomSelectType) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const onChange = (id: string) => {
        const filteredOption = props?.options?.filter(option => option?.id === id)[0];
        if (!filteredOption) return;



        const params = new URLSearchParams(searchParams);
        params.set('page', "1");
        params.set("sortBy", filteredOption?.key);
        params.set("order", filteredOption?.value);
        router.replace(`${pathname}?${params.toString()}`)

    }

    return (
        <Select onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder={props?.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {props?.options?.map((option, index) => (
                        <SelectItem key={index} value={option?.id}>
                            {option?.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}