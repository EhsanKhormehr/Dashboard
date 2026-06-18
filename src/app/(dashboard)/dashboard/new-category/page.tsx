import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">New Category</h1>
        <div>
          <Button type="button" className="cursor-pointer py-4.5 font-semibold">
            Add Field
            <Plus className="size-5" />
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input
              type="text"
              placeholder="Name"
              className="bg-surface rounded-3xl text-sm text-foreground py-5"
            />
          </Field>
          <Field>
            <FieldLabel>Slug</FieldLabel>
            <Input
              type="text"
              placeholder="Slug"
              className="bg-surface rounded-3xl text-sm text-foreground py-5"
            />
          </Field>
        </FieldGroup>
        <h3 className="mt-5 font-semibold text-xl">Attributes</h3>
        <Card className="shadow-card">
          <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
            <CardTitle className="font-bold text-2xl">Deals Details</CardTitle>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Required</TableHead>
                  <TableHead>Options</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input placeholder="Name"/>
                </TableCell>
                <TableCell>
                  <Input placeholder="Slug"/>
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger>Type</SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="text">text</SelectItem>
                        <SelectItem value="number">number</SelectItem>
                        <SelectItem value="select">select</SelectItem>
                        <SelectItem value="select">select</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
