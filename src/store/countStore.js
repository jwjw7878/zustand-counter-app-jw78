import { create } from "zustand";

const countStore = create((set) => ({
  // 초기 state
  count: 1,
  // 콜백 함수 안 set 함수 생성
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: (state.count = 1) })),
  // 매개변수 있을 시
  increaseBy: (val) => set((state) => ({ count: state.count + val })),
}));

export default countStore;
