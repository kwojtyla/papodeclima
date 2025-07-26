import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
  return (
    <div className="prose prose-primary max-w-none">
      <MDXRemote {...source} />
    </div>
  );
};
