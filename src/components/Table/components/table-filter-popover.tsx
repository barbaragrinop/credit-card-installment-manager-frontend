import { Button } from "@/components/Button";
import { Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

export default function TableFilterPopover() {
  return (
    <Popover isLazy>
      <PopoverTrigger >
        <Button.Primary>
          <FaFilter />
        </Button.Primary>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton/>
        <PopoverCloseButton />

          <span className="text-lg font-bold mb-4">
            Filter by:
          </span>

          <span className="bold  text-gray-600"> Status</span>

          <Text fontSize="md"  fontWeight="bold"  mb={1}>Filter  by:</Text>

      </PopoverContent>
    </Popover>
  )
}
