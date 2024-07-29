interface Props {
  params: { id: string };
}

export default function PkmonPage({ params }: Props) {
  return (
    <div>
      <h1>Pókemon {params.id}</h1>
    </div>
  );
}
