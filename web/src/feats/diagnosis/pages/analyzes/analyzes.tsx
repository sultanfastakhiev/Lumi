import React from "react";
import { Title } from "@core/components/typography/title/title";
import { Subtitle } from "@core/components/typography/subtitle/subtitle";
import {
    DiagnosisLayout,
    LeftDiagnosisLayout,
    RightDiagnosisLayout
} from "@feats/diagnosis/components/diagnosis-layout/diagnosis-layout";
import { Button, Divider, FileUpload } from "react-untitled-ui";
import { PredictionResults } from "@feats/diagnosis/components/prediction-results/prediction-results";
import { useAnalyzes } from "@feats/diagnosis/pages/analyzes/use-analyzes";
import { FilePreview, ContentWrapper, Layout } from "@core/components";
import Head from "next/head";

export type AnalyzesProps = {}

export const Analyzes: React.FC<AnalyzesProps> = () => {
    const {file, clearFile, onPick, loading, handleButtonClick, predictions} = useAnalyzes();

    return <Layout>
        <Head>
            <title>Расшифровка анализов | Lumi</title>
        </Head>
        <ContentWrapper>
            <Title>Расшифровка анализов</Title>
            <Subtitle>Автоматическое выявление сердечно-сосудистых заболеваний по анализам крови</Subtitle>
            <DiagnosisLayout>
                <LeftDiagnosisLayout>
                    <FileUpload
                        onDrop={ onPick }
                        buttonText="Нажмите"
                        text="чтобы загрузить анализы"
                        subText="Таблица в формате CSV"/>
                    {
                        file && <FilePreview file={ file } onClick={ clearFile }/>
                    }
                    <Button
                        loading={ loading }
                        disabled={ !file }
                        onClick={ handleButtonClick }
                        fullWidth>
                        Расшифровать
                    </Button>
                </LeftDiagnosisLayout>
                <Divider type="vertical"/>
                <RightDiagnosisLayout>
                    <PredictionResults
                        predictions={ predictions }
                        notFoundText={ !file
                            ? "Сначала вам необходимо загрузить анализы"
                            : "Нажмите на кнопку Расшифровать, чтобы получить результаты"
                        }/>
                </RightDiagnosisLayout>
            </DiagnosisLayout>
        </ContentWrapper>
    </Layout>
}