import dynamic from "next/dynamic";
import { Chess } from "chess.js";

const Chessboard = dynamic(() => import("react-chessboard"), { ssr: false });
const game = new Chess();

export default function Board() {
  const makeMove = (move) => {
    const result = game.move(move);
    return result ? result : undefined;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Chessboard
        position={game.fen()}
        onPieceDrop={(source, target) => {
          const move = makeMove({ from: source, to: target, promotion: "q" });
          return !!move;
        }}
        boardWidth={400}
      />
    </div>
  );
}