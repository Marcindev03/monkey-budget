import { FC } from "react";
import NextLink from "next/link";
import { CustomCard } from "../CustomCard";
import { BoxProps, Link } from "@chakra-ui/react";

type LinkedCardProps = {
  href: string;
  cardProps?: BoxProps;
  children: React.ReactNode;
};

export const LinkedCard: FC<LinkedCardProps> = ({
  cardProps,
  href,
  children,
}) => {
  return (
    <NextLink href={href} passHref>
      <Link cursor={"pointer"}>
        <CustomCard {...cardProps}>{children}</CustomCard>
      </Link>
    </NextLink>
  );
};
