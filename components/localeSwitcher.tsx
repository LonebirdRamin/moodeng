"use client"

import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const displayLang = {
  en: "English",
  th: "Thai",
} as const;

type Locale = keyof typeof displayLang;

type Props = {
    currentLocale: Locale;
}

export default function LocaleSwitcher({ currentLocale }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string) => {
        const segments = pathname.split("/");
        segments[1] = value;
        const newPath = segments.join("/") || "/";
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{displayLang[currentLocale]}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={currentLocale} onValueChange={handleChange}>
                <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="th">Thai</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}