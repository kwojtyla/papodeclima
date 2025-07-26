import { useEffect, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export const useMDX = (content: string) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const compileMDX = async () => {
      try {
        const result = await serialize(content);
        setMdxSource(result);
      } catch (error) {
        console.error("Error compiling MDX:", error);
      }
    };

    compileMDX();
  }, [content]);

  return mdxSource;
};
