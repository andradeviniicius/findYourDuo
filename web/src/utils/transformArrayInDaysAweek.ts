export default function transformArrayInDaysAweek(arr: number[] | undefined) {
  return arr?.map((el: number) => {
    if (el === 0) {
      return "Segunda";
    }
    if (el === 1) {
      return "Terça";
    }
    if (el === 2) {
      return "Quarta";
    }
    if (el === 3) {
      return "Quinta";
    }
    if (el === 4) {
      return "Sexta";
    }
    if (el === 5) {
      return "Sábado";
    }
    if (el === 6) {
      return "Domingo";
    }
  });
}
