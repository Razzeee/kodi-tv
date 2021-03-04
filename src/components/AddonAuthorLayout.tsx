import React from "react"
import { Text, TextVariants, TextContent } from "@patternfly/react-core"
import IconList from "src/components/IconList"
import Layout from "src/gatsby-theme-patternfly/components/Layout"
import MetadataHeader from "src/components/SiteMetadata"

export default function AddonAuthorLayout({
  data,
}: {
  data: { author: { totaladdons: string; name: string; addons: string[] } }
}) {
  const author = data.author

  return (
    <Layout>
      <MetadataHeader title={author.name + ' | Author | Add-On'} />
      <TextContent>
        <Text component={TextVariants.h1}>{author.name}</Text>
        <Text>
          {author.name} has {author.totaladdons}{" "}add-ons.
        </Text>
      </TextContent>
      <IconList items={author.addons} linkroot="../../" />
    </Layout>
  )
}
