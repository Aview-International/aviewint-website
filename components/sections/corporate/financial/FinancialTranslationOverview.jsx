import incomeStatements from '../../../../public/img/graphics/corporate/financial/income-statements.png';
import balanceSheets from '../../../../public/img/graphics/corporate/financial/balance-sheets.png';
import taxReturns from '../../../../public/img/graphics/corporate/financial/tax-returns.png';
import auditReports from '../../../../public/img/graphics/corporate/financial/audit-reports.png';
import insuranceDocuments from '../../../../public/img/graphics/corporate/financial/insurance-documents.png';
import salesBrochures from '../../../../public/img/graphics/corporate/financial/sales-brochures.png';
import Border from '../../../UI/Border';
import Image from 'next/image';

const ITEMS = [
  {
    title: 'Income Statements',
    description:
      "In order to run a business, income statements are required to keep track of all cash flow. Whether it's expenses, revenue, or funding it's crucial to have all your company's records. Translating income statements is important to ensure that all employees can understand the material.",
    image: incomeStatements,
  },
  {
    title: 'Balance Sheets',
    description:
      "Scaling a business requires funding from investors. Balance sheets are used to organize all information regarding shareholders. If you're looking to go global, balance sheets must be translated into all the necessary languages.",
    image: balanceSheets,
  },
  {
    title: 'Tax Returns',
    description:
      'Filing taxes is a must for a company. But what if your company is international? Localizing your tax returns may be a necessary step to ensuring your taxes are filed correctly.',
    image: taxReturns,
  },
  {
    title: 'Audit Reports',
    description:
      'Having professionals audit your business can help boost performance. The information obtained through auditing your company must be kept well organized. This is what audit reports are used for. At AVIEW, we translate audit reports to ensure everyone in your company can understand the material.',
    image: auditReports,
  },
  {
    title: 'Insurance Documents',
    description:
      "Purchases, product lists, and pricing are all information that should be included in insurance documents. It's vital to have these reports to stay compliant with your country's laws. If your company is going global it's good to have these translated.",
    image: insuranceDocuments,
  },
  {
    title: 'Sales Brochures',
    description:
      'Sales brochures are a great way to promote your product or service. But what if you want to market to a foreign audience? This is why AVIEW offers sales brochure translation services.',
    image: salesBrochures,
  },
];

export default function FinancialTranslationOverview() {
  return (
    <section className="section m-horizontal md:text-center">
      <h2 className="title mb-s2">
        Aview&apos;s Financial Translation{' '}
        <span className="gradient-text gradient-2">Overview</span>
      </h2>
      <p className="body mb-s5">
        Monitoring all financial information in a company helps things run
        smoothly. However, if your business adopts an international growth
        strategy, you may run into problems with language barriers. This is
        where translations come in. At AVIEW, we offer specialized financial
        translations so you can easily keep tabs on your business&apos;s
        financial records.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div key={item.title}>
            <Border classes="rounded-2xl group">
              <div className="rounded-2xl bg-black p-6">
                <div className="mx-auto mb-4 w-[75%] md:group-hover:hidden">
                  <Image src={item.image} />
                </div>
                <p className="mb-2 text-center text-5xl font-bold text-white">
                  {item.title}
                </p>
                <p className="body hidden text-left group-hover:block">
                  {item.description}
                </p>
              </div>
            </Border>
          </div>
        ))}
      </div>
    </section>
  );
}
