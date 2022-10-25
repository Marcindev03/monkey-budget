import { Box, ListItem, Tag } from "@chakra-ui/react";
import React, { FC } from "react";
import { Category } from "../../types/category";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <ListItem>
      <Box>
        <Tag colorScheme={category.color}>{category.name}</Tag>
      </Box>
    </ListItem>
  );
};

export default CategoryCard;
