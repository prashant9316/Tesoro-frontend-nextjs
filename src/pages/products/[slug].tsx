import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import RelatedCategories from "@containers/related-categories";

export default function ProductPage() {
	return (
		<>
			<Divider className="mt-[10vh]" />
			<Container>
				<div className="pt-2">
					<Breadcrumb />
				</div>
				<ProductSingleDetails />
				<RelatedProducts sectionHeading="People Buying this also bought" />
				<RelatedProducts sectionHeading="Similar Products" />
				<RelatedCategories />
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};