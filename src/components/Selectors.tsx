"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IComboboxDemo } from "../../types/types";

export function ComboboxDemo({
  name,
  data,
  setState,
  valueState,
}: IComboboxDemo) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[455px] justify-between "
        >
          {valueState
            ? data.find((data) => data.value === valueState)?.value
            : name}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full lg:w-[455px]">
        <Command>
          <CommandInput placeholder={name} />
          <CommandEmpty>No {name} found.</CommandEmpty>
          <CommandGroup>
            {data.map((data) => (
              <CommandItem
                key={data.value}
                onSelect={(currentValue) => {
                  setState(currentValue === data.value ? "" : data.value);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    valueState === data.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {data.value}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
