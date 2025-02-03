import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CoinIcon from "@/assets/landin-page/blockcXCoin.png";
import Image from "next/image";
import blockXRoom from "@/assets/Roulette/BlockXRoom.png";

const TableComp = () => {
  function createData(
    round: string,
    player: string,
    entry: string,
    table: string,
    one: string
  ) {
    return { round, player, entry, table, one };
  }
  const rows = [
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
    createData("Round #123456", "xion1...wugav", "1 Entry", "BETI-FI", "1"),
  ];

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#FFFFFF08" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ color: "white" }}>
            <TableCell
              sx={{
                color: "#AAAAAA",
                fontWeight: "bold",
                borderBottom: "none",
              }}
            >
              ROUND
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "#AAAAAA",
                fontWeight: "bold",
                borderBottom: "none",
              }}
            >
              PLAYER
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#AAAAAA", borderBottom: "none" }}
            >
              ENTRY
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#AAAAAA", borderBottom: "none" }}
            >
              TABLE
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#AAAAAA", borderBottom: "none" }}
            >
              1
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0 }}>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                backgroundColor: "#060712",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                sx={{ color: "white", borderBottom: "none" }}
                component="th"
                scope="row"
              >
                {row.round}
              </TableCell>
              <TableCell
                align="center"
                // width={100}
                sx={{
                  color: "white",
                  borderBottom: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "4px",
                }}
              >
                <Image src={CoinIcon} alt="token icon" className="h-5 w-5" />
                {row.player}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", borderBottom: "none" }}
              >
                {row.entry}
              </TableCell>
              <TableCell
                // align="left"
                sx={{
                  color: "white",
                  borderBottom: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "4px",
                }}
              >
                <Image
                  src={blockXRoom}
                  alt="block X room"
                  className="h-5 w-5"
                />
                {row.table}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", borderBottom: "none" }}
              >
                <span className="bg-[#328749] rounded-[20px] px-3 py-1">
                  {row.one}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;

