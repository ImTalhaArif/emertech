'use client';

import { useEffect } from "react";

export default function ClientBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // nothing rendered, only side-effect
}
