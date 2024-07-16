import styles from "./header.module.css";
import { Flex } from "@chakra-ui/react";
import { PiTwitterLogoBold } from "react-icons/pi";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = () => {
  return (
    <>
      <Flex className={styles.header_bar}>
        <Flex className={styles.header_logo}>
          <PiTwitterLogoBold />
        </Flex>
        <Flex className={styles.header_toolList}>
          <Sidebar />
        </Flex>
      </Flex>
    </>
  );
};
