import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import React from "react";

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute right-5 top-5 text-zinc-500 hover:text-zinc-100"
      title="Fechar formulário"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
