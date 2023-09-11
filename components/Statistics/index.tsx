export type Statistics = {
    id: number;
    name: string;
    value: string
  };

  const statisticsData: Statistics [] = [
    { id: 1, name: 'Trading every 24 hours', value: '14 million' },
    { id: 2, name: 'Assets under management', value: '$19 trillion' },
    { id: 3, name: 'New accounts annually', value: '40,000' },
  ]


const Statistics = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {statisticsData.map((statistic) => (
                    <SingleStat key={statistic.id} statistics={statistic} />
                ))}
                </dl>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

const SingleStat = ({ statistics }: { statistics: Statistics }) => {
  const { id, name, value } = statistics;

  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4 animate-bounce ">
        <dt className="text-base leading-7 text-gray-600">{name}</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {value}
        </dd>
    </div>
  );
};



