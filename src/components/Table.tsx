"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableDemo({
  DataRow,
  DataNumbers,
  totalCapacity,
}: {
  DataRow: string[];
  DataNumbers: number[];
  totalCapacity: number;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window) {
      window.innerWidth <= 640 ? setIsMobile(true) : null;
    }
  }, []);

  return (
    <Table className={`${isMobile && "flex"}`}>
      <TableHeader>
        <TableRow className={`${isMobile && "flex flex-col"}`}>
          {DataRow.map((item, index) => (
            <TableHead key={index} className="">
              {item}
            </TableHead>
          ))}
          <TableHead className="">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className={`${isMobile && "flex flex-col"}`}>
          {DataNumbers.map((item, index) => (
            <TableCell key={index} className="font-medium">
              {item}
            </TableCell>
          ))}
          <TableCell className="font-medium">
            {totalCapacity.toFixed(2)}%
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
